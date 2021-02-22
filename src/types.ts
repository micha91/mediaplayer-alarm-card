export interface MediaplayerAlarmConfig {
  type: string;
  name?: string;
  media_player: string;
  platform: string;
  time_attribute: string;
  enabled_attribute: string;
  volume_attribute: string;
  source_attribute: string;
  source_list_attribute: string;
  volume_settings_attribute: string;
}
