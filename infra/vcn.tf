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

resource "oci_core_internet_gateway" "internet_gateway" {
    #Required
    compartment_id = var.compartment_id
    vcn_id = oci_core_vcn.vcn.id

    #Optional
    defined_tags = {"Operations.CostCenter"= "42"}
    display_name = var.internet_gateway_display_name
    freeform_tags = {"Department"= "Finance"}
    route_table_id = oci_core_route_table.route_table.id
}

resource "oci_core_nat_gateway" "nat_gateway" {
    #Required
    compartment_id = var.compartment_id
    vcn_id = oci_core_vcn.vcn.id

    #Optional
    block_traffic = false
    defined_tags = {"Operations.CostCenter"= "42"}
    display_name = var.nat_gateway_display_name
    freeform_tags = {"Department"= "Finance"}
    route_table_id = oci_core_route_table.route_table.id
}

resource "oci_core_route_table" "route_table" {
    compartment_id = var.compartment_id
    vcn_id = oci_core_vcn.vcn.id

    #Optional
    defined_tags = {"Operations.CostCenter"= "42"}
    display_name = var.route_table_display_name
    freeform_tags = {"Department"= "Finance"}
    route_rules {
        #Required
        network_entity_id = oci_core_internet_gateway.internet_gateway.id
    }
}

