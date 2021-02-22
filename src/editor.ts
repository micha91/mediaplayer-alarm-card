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

import { MediaplayerAlarmConfig } from './types';
import { localize } from './localize/localize';

@customElement('mediaplayer-alarm-editor')
export class LightalarmCardEditor extends LitElement implements LovelaceCardEditor {
  @property({ attribute: false }) public hass?: HomeAssistant;
  @internalProperty() private _config?: MediaplayerAlarmConfig;

  public setConfig(config: MediaplayerAlarmConfig): void {
    this._config = config;
  }

  get _title(): string {
    if (this._config) {
      return this._config.name || '';
    }

    return '';
  }

  get _media_player_entity(): string {
    if (this._config) {
      return this._config.media_player || '';
    }

    return '';
  }

  get _platform(): string {
    if (this._config) {
      return this._config.platform || '';
    }

    return '';
  }

  get _time_attribute(): string {
    if (this._config) {
      return this._config.time_attribute || '';
    }

    return '';
  }

  get _enabled_attribute(): string {
    if (this._config) {
      return this._config.enabled_attribute || '';
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

  get _volume_settings_attribute(): string {
    if (this._config) {
      return this._config.volume_settings_attribute || '';
    }

    return '';
  }

  get _force_native_time_picker_for_device(): boolean {
    return localStorage.getItem('mediaplayerAlarmCard.forceNativePicker') === 'true';
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

    // You can restrict on domain type
    const media_player_entities = Object.keys(this.hass.states).filter(
      eid => eid.substr(0, eid.indexOf('.')) === 'media_player',
    );

    return html`
      <div class="card-config">
        <paper-input
          label="${localize('config.name')} (${localize('config.optional')})"
          .value=${this._title}
          .configValue=${'name'}
          @value-changed=${this._valueChanged}
        ></paper-input>

        <div class="indent">
          <paper-dropdown-menu
            label="${localize('config.media_player')}"
            @value-changed=${this._valueChanged}
            .configValue=${'media_player'}
          >
            <paper-listbox
              slot="dropdown-content"
              .selected=${media_player_entities.indexOf(this._media_player_entity)}
            >
              ${media_player_entities.map(entity => {
                return html`
                  <paper-item>${entity}</paper-item>
                `;
              })}
            </paper-listbox>
          </paper-dropdown-menu>
          <br />
          <paper-input
            label="${localize('config.platform')}"
            @value-changed=${this._valueChanged}
            .configValue=${'platform'}
            .value=${this._platform}
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
            label="${localize('config.enabled_attribute')}"
            @value-changed=${this._valueChanged}
            .configValue=${'enabled_attribute'}
            .value=${this._enabled_attribute}
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
          <br />
          <paper-input
            label="${localize('config.volume_settings_attribute')}"
            @value-changed=${this._valueChanged}
            .configValue=${'volume_settings_attribute'}
            .value=${this._volume_settings_attribute}
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
        localStorage.setItem('mediaplayerAlarmCard.forceNativePicker', target.checked ? 'true' : 'false');
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
      .switch-label {
        padding-left: 10px;
      }
    `;
  }
}

const wdw = window as any;
wdw.customCards = wdw.customCards || [];
wdw.customCards.push({
  type: 'mediaplayer-alarm',
  name: 'Media Player Alarm Card',
  preview: false,
  description: 'Coordinate mediaplayers alarm settings in a beautiful way',
});
