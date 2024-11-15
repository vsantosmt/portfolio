resource "oci_core_instance" "instance" {
  availability_domain = var.availability_domain
  compartment_id      = var.compartment_id
  shape               = var.shape
  display_name        = var.display_name_instance

  create_vnic_details {
    subnet_id        = oci_core_subnet.subnet.id
    assign_public_ip = true
  }

  source_details {
    source_type = "image"
    source_id   = var.source_id
  }

  metadata = {
    ssh_authorized_keys = "./ssh-key-2024-10-31.key.pub"
  }
}