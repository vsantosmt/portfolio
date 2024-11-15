terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "6.11.1"
    }
  }

  backend "azurerm" {
    resource_group_name  = "rg-terraform-state"
    storage_account_name = "vinisantosterraformstate"
    container_name       = "remote-state"
    key                  = "portfolio-gcp/terraform.tfstate"
  }
}

provider "google" {
  project = var.project_id
  region  = var.region
}