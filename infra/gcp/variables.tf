#project
variable "project_id" {
  default = "portfolio-440103" #alterar conforme mudar de projeto
}
variable "region" {
  default = "us-west1"
}

#compute_instace
variable "account_id" {
  default = "portfolio-440103"
}
variable "compute_instace_name" {
  default = "port-prd"
}
variable "compute_instance_machine_type" {
  default = "e2-micro"
}
variable "compute_instance_zone" {
  default = "us-west1-b"
}
variable "compute_instance_image" {
  default = "ubuntu-os-cloud/ubuntu-2204-lts"
}
variable "compute_instance_size" {
  default = 28
}
variable "compute_instance_type" {
  default = "pd-standard"
}
variable "compute_instance_network_name" {
  default = "vpc-prd"
}

#network_alert
variable "network_traffic_alert_name" {
  default = "Network Traffic Alert (0.9 GB)"
}
variable "network_alert_combiner" {
  default = "OR"
}

#vpc
variable "google_compute_network_name" {
  default = "vpc-prd"
}
variable "google_compute_network_routing_mode" {
  default = "REGIONAL"
}

#subnet
variable "google_compute_subnetwork_name" {
  default = "subnet-prd"
}
variable "google_compute_subnetwork_ip_cidr_range" {
  default = "10.0.0.0/24"
}

#firewall-allow
variable "google_compute_firewall_name" {
  default = "allow-http-https-5000-5173"
}
variable "google_compute_firewall_source_range" {
  default = "0.0.0.0/0"
}

#meta data
variable "ssh-keys" {
  default = "gcp:ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDvMYuo6TGysmTQmIPPPcI0JPrAb2inJbVwjtOvwIaTE9QgxUqqib5/oMt2sTP+g74QDDgMcdl58S4NrfvQLbyLsXTzinNES5GGT3BvMfsEtYn1nZNSjA9bBXdOppeITJId6A6oR2nD3Zmm4EyKJeIYKQCljqXqeJ9/HATrY2AauczpFKVSxDEg8d34V3d/sr6lnLbWclf/nd3kJhgsXhNiiy0/XQsqffzOc5BVUHXLYj9OfeHxLPOyRQ8qQGyHOwPlJGpeWsRsxEckAEBkxRDZ6hG5Ute7OfbpCAbYbF/fs7eYd5GExTAp0q5++Pof3xHmzz/OwG2yCDOiaXIFo3pL gcp"
}
