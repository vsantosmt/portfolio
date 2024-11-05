# variable "oci_user" {
#   description = "O OCID do usuário OCI"
# }

# variable "oci_fingerprint" {
#   description = "A impressão digital da chave de API"
# }

# variable "oci_key_file" {
#   description = "Caminho para o arquivo da chave de API"
# }

# variable "oci_tenancy" {
#   description = "O OCID do inquilino"
# }

# variable "oci_region" {
#   description = "A região OCI"
# }

variable "compartment_id" {
  default = "ocid1.compartment.oc1..aaaaaaaachpsbjrggtj7a6unvnfmg27pfewzkhtwqptz5u5olco3qgdjnw3a"
}

variable "cidr_block" {
  default = "10.0.0.0/16"
}

variable "display_name" {
  default = "vcn-prd"
}

variable "cidr_block_subnet" {
  default = "10.0.1.0/24"
}

variable "display_name_subnet" {
  default = "my_subnet"
}

variable "availability_domain" {
  default = "AD-1"
}

variable "shape" {
  default = "VM.Standard.E2.1.Micro"
}

variable "display_name_instance" {
  default = "port-prd"
}

variable "source_id" {
  default = "ocid1.image.oc1.sa-vinhedo-1.aaaaaaaawcyxswo24oly65otdef2wzpc33yyzxrgid3zd53p37n4u32qikla"
}