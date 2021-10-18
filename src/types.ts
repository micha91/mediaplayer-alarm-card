export interface ServiceAlarmConfig {
  type: string;
  name?: string;
  switch_entity: string;
  service_entity: string;
  platform: string;
  service: string;
  time_attribute: string;
  volume_attribute: string;
  source_attribute: string;
  source_list_attribute: string;
}
