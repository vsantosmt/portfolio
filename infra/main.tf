terraform {
  required_providers {
    oci = {
      source = "oracle/oci"
      version = "6.15.0"
      }
    }

  backend "azurerm" {
    resource_group_name  = "rg-terraform-state"
    storage_account_name = "vinisantosterraformstate"
    container_name       = "remote-state"
    key                  = "portfolio/terraform.tfstate"
  }
}

provider "oci" {
  region           = "sa-saopaulo-1"
  private_key_path = "C:\\projects\\key-pars\\oci-portfolio-manual\\ssh-key-2024-10-31.key"
  tenancy_ocid     = "ocid1.tenancy.oc1..aaaaaaaai4v45ccmqcuq77ubihr2jbhy7sv7ba2dvgeviwsjoiy4qomqakbq"
  user_ocid        = "ocid1.user.oc1..aaaaaaaadauattwwqptwf7wupeesdwhi26ic32xj6sdk7dbwkh2odlmso4ta"
  fingerprint      = "a4:70:66:97:61:20:14:45:34:81:7d:1d:85:10:de:fb"
}

