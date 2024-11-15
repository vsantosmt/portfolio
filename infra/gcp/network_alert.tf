resource "google_monitoring_alert_policy" "network_traffic_alert" {
  display_name = var.network_traffic_alert_name
  combiner     = var.network_alert_combiner

  notification_channels = [google_monitoring_notification_channel.email.id]

  conditions {
    display_name = "Network Egress > 0.9GB"
    condition_threshold {
      comparison      = "COMPARISON_GT"
      threshold_value = 900000000 # 0.9 GB em bytes

      aggregations {
        alignment_period   = "60s"
        per_series_aligner = "ALIGN_RATE"
      }

      filter   = "metric.type=\"compute.googleapis.com/instance/disk/write_bytes_count\" AND resource.type=\"gce_instance\""
      duration = "300s" # 300 segundos (5 minutos)
    }
  }
}

resource "google_monitoring_notification_channel" "email" {
  display_name = "Email Notification Channel"
  type         = "email"
  labels = {
    email_address = "santos.viniciusmt@gmail.com"
  }
}

#adicionar variaveis no campo variables

# Script para bloquear a saída
# gcloud compute firewall-rules create "block-outbound" \
#   --direction=EGRESS \
#   --priority=1000 \
#   --network="default" \
#   --action=DENY \
#   --rules="all" \
#   --destination-ranges="0.0.0.0/0"

# Script para restaurar o tráfego de rede após virada do mês
# gcloud compute firewall-rules delete "block-outbound" --quiet


