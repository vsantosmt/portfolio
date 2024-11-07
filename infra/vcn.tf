resource "oci_core_vcn" "vcn" {
  cidr_block     = var.cidr_block
  display_name   = var.display_name
  compartment_id = var.compartment_id
}

resource "oci_core_subnet" "subnet" {
  cidr_block                 = var.cidr_block_subnet
  vcn_id                     = oci_core_vcn.vcn.id
  display_name               = var.display_name_subnet
  compartment_id             = var.compartment_id
  prohibit_public_ip_on_vnic = false
}

# criar inboud rules, liberacao porta 80 http