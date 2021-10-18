import {
  LitElement,
  html,
  customElement,
  property,
  TemplateResult,
  CSSResult,
  css,
  internalProperty,
} from 'lit-element';
import { HomeAssistant, fireEvent, LovelaceCardEditor } from 'custom-card-helpers';

import { ServiceAlarmConfig } from './types';
import { localize } from './localize/localize';

@customElement('service-alarm-editor')
export class LightalarmCardEditor extends LitElement implements LovelaceCardEditor {
  @property({ attribute: false }) public hass?: HomeAssistant;
  @internalProperty() private _config?: ServiceAlarmConfig;

  public setConfig(config: ServiceAlarmConfig): void {
    this._config = config;
  }

  _all_entities;

  get _title(): string {
    if (this._config) {
      return this._config.name || '';
    }

    return '';
  }

  get _switch_entity(): string {
    if (this._config) {
      return this._config.switch_entity || '';
    }

    return '';
  }

  get _service_entity(): string {
    if (this._config) {
      return this._config.service_entity || '';
    }

    return '';
  }

  get _platform(): string {
    if (this._config) {
      return this._config.platform || '';
    }

    return '';
  }

  get _service(): string {
    if (this._config) {
      return this._config.service || '';
    }

    return '';
  }

  get _time_attribute(): string {
    if (this._config) {
      return this._config.time_attribute || '';
    }

    return '';
  }

  get _volume_attribute(): string {
    if (this._config) {
      return this._config.volume_attribute || '';
    }

    return '';
  }

  get _source_attribute(): string {
    if (this._config) {
      return this._config.source_attribute || '';
    }

    return '';
  }

  get _source_list_attribute(): string {
    if (this._config) {
      return this._config.source_list_attribute || '';
    }

    return '';
  }

  get _force_native_time_picker_for_device(): boolean {
    return localStorage.getItem('serviceAlarmCard.forceNativePicker') === 'true';
  }

  get _switch_entities(): Array<string> {
    if (this._all_entities && this._platform) {
      return this._all_entities
        .filter(element => element.platform === this._platform)
        .filter(element => element.entity_id.substr(0, element.entity_id.indexOf('.')) === 'switch')
        .map(element => element.entity_id);
    }
    if (this.hass) {
      return Object.keys(this.hass.states).filter(eid => eid.substr(0, eid.indexOf('.')) === 'switch');
    }
    return [];
  }

  get _service_entities(): Array<string> {
    if (this._all_entities && this._platform) {
      return this._all_entities
        .filter(element => element.platform === this._platform)
        .map(element => element.entity_id);
    }
    if (this.hass) {
      return Object.keys(this.hass.states);
    }
    return [];
  }

  protected render(): TemplateResult | void {
    if (!this.hass) {
      return html``;
    }

    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).loadCardHelpers().then(helper => {
        helper.createRowElement({ type: 'input-select-entity' });
      });
    } catch (e) {}

    if (!this._all_entities) {
      // Lets request entity details
      this.hass.callWS({ type: 'config/entity_registry/list' }).then(result => {
        this._all_entities = result;
        fireEvent(this, 'config-changed', { config: this._config });
      });
    }

    return html`
      <div class="card-config">
        <paper-input
          label="${localize('config.name')} (${localize('config.optional')})"
          .value=${this._title}
          .configValue=${'name'}
          @value-changed=${this._valueChanged}
        ></paper-input>

        <div class="indent">
          <paper-input
            label="${localize('config.platform')}"
            @value-changed=${this._valueChanged}
            .configValue=${'platform'}
            .value=${this._platform}
          >
          </paper-input>
          <br />
          <paper-dropdown-menu
            label="${localize('config.switch_entity')}"
            @value-changed=${this._valueChanged}
            .configValue=${'switch_entity'}
          >
            <paper-listbox slot="dropdown-content" .selected=${this._switch_entities.indexOf(this._switch_entity)}>
              ${this._switch_entities.map(entity => {
                return html`
                  <paper-item>${entity}</paper-item>
                `;
              })}
            </paper-listbox>
          </paper-dropdown-menu>
          <br />
          <paper-dropdown-menu
            label="${localize('config.service_entity')}"
            @value-changed=${this._valueChanged}
            .configValue=${'service_entity'}
          >
            <paper-listbox slot="dropdown-content" .selected=${this._service_entities.indexOf(this._service_entity)}>
              ${this._service_entities.map(entity => {
                return html`
                  <paper-item>${entity}</paper-item>
                `;
              })}
            </paper-listbox>
          </paper-dropdown-menu>
          <br />
          <paper-input
            label="${localize('config.service')}"
            @value-changed=${this._valueChanged}
            .configValue=${'service'}
            .value=${this._service}
          >
          </paper-input>
          <br />
          <paper-input
            label="${localize('config.time_attribute')}"
            @value-changed=${this._valueChanged}
            .configValue=${'time_attribute'}
            .value=${this._time_attribute}
          >
          </paper-input>
          <br />
          <paper-input
            label="${localize('config.volume_attribute')}"
            @value-changed=${this._valueChanged}
            .configValue=${'volume_attribute'}
            .value=${this._volume_attribute}
          >
          </paper-input>
          <br />
          <paper-input
            label="${localize('config.source_attribute')}"
            @value-changed=${this._valueChanged}
            .configValue=${'source_attribute'}
            .value=${this._source_attribute}
          >
          </paper-input>
          <br />
          <paper-input
            label="${localize('config.source_list_attribute')}"
            @value-changed=${this._valueChanged}
            .configValue=${'source_list_attribute'}
            .value=${this._source_list_attribute}
          >
          </paper-input>
        </div>
        <br />
        <ha-switch
          .checked=${this._force_native_time_picker_for_device}
          .configValue=${'force_native_time_picker_for_device'}
          @change=${this._valueChanged}
        ></ha-switch>
        <span class="switch-label">${localize('config.force_native_time_picker_for_device')}</span>
      </div>
    `;
  }

  private _valueChanged(ev): void {
    if (!this._config || !this.hass) {
      return;
    }
    const target = ev.target;
    if (this[`_${target.configValue}`] === target.value) {
      return;
    }
    if (target.configValue) {
      if (target.configValue === 'force_native_time_picker_for_device') {
        localStorage.setItem('serviceAlarmCard.forceNativePicker', target.checked ? 'true' : 'false');
      } else if (target.value === '') {
        delete this._config[target.configValue];
      } else {
        this._config = {
          ...this._config,
          [target.configValue]: target.checked !== undefined ? target.checked : target.value,
        };
      }
    }
    fireEvent(this, 'config-changed', { config: this._config });
  }

  static get styles(): CSSResult {
    return css`
      .indent {
        padding-left: 40px;
      }
      .entity-label {
        padding-left: 10px;
      }
    `;
  }
}

const wdw = window as any;
wdw.customCards = wdw.customCards || [];
wdw.customCards.push({
  type: 'service-alarm',
  name: 'Service Alarm Card',
  preview: false,
  description: 'Coordinate alarm clock settings in a beautiful way',
});
