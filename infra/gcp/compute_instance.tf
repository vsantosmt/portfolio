resource "google_service_account" "service_account" {
  account_id = var.account_id
}

resource "google_compute_network" "vpc_network" {
  name                    = var.google_compute_network_name
  auto_create_subnetworks = false                                   
  routing_mode            = var.google_compute_network_routing_mode # Pode ser "GLOBAL" ou "REGIONAL"
}

resource "google_compute_subnetwork" "subnet" {
  name          = var.google_compute_subnetwork_name
  region        = var.region 
  network       = google_compute_network.vpc_network.self_link
  ip_cidr_range = var.google_compute_subnetwork_ip_cidr_range
}

resource "google_compute_firewall" "allow_http_https" {
  name    = var.google_compute_firewall_name
  network = google_compute_network.vpc_network.self_link

  lifecycle {
    prevent_destroy = false # Isso vai permitir a exclusão da regra
  }

  allow {
    protocol = "tcp"
    ports    = ["22", "80", "443", "3000", "5000", "5173"]
  }

  # Definindo os IPs que podem acessar (por exemplo, 0.0.0.0/0 para permitir qualquer IP)
  source_ranges = [var.google_compute_firewall_source_range]
}


resource "google_compute_instance" "compute_instance" {
  name         = var.compute_instace_name
  machine_type = var.compute_instance_machine_type
  zone         = var.compute_instance_zone

  boot_disk {
    initialize_params {
      image = var.compute_instance_image
      size  = var.compute_instance_size
      type  = var.compute_instance_type
      labels = {
        environment = "prd"
        managed-by  = "terraform"
      }
    }
  }



  network_interface {
    network    = var.compute_instance_network_name
    subnetwork = google_compute_subnetwork.subnet.self_link

    access_config {
      //Deixar vazio para ser criado IP publico dinamico, ao reiniciar sera mudado, se atente a isso
    }
  }

  metadata_startup_script = file("./script.sh")

  metadata = {
    "ssh-keys" = var.ssh-keys
  }

}