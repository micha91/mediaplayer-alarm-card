/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
  LitElement,
  html,
  customElement,
  property,
  internalProperty,
  CSSResult,
  TemplateResult,
  css,
  PropertyValues,
} from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';
import {
  HomeAssistant,
  hasConfigOrEntityChanged,
  LovelaceCardEditor,
  forwardHaptic,
  computeRTLDirection,
} from 'custom-card-helpers';

import './editor';

import { CARD_VERSION } from './const';
import { MediaplayerAlarmConfig } from './types';
import { localize } from './localize/localize';

/* eslint no-console: 0 */
console.info(
  `%c MEDIAPLAYER-ALARM-CARD %c ${CARD_VERSION} `,
  'color: cornsilk; font-weight: bold; background: firebrick',
  'color: firebrick; font-weight: bold; background: cornsilk',
);

@customElement('mediaplayer-alarm')
export class MediaplayerAlarmCard extends LitElement {
  private timeInputStatus: 'none' | 'shown' = 'none';
  private debounceTimer;
  private inputBlurTimer;

  public static async getConfigElement(): Promise<LovelaceCardEditor> {
    return document.createElement('mediaplayer-alarm-editor') as LovelaceCardEditor;
  }

  public static getStubConfig(): object {
    return {};
  }

  @property({ attribute: false }) public hass?: HomeAssistant;
  @internalProperty() private config?: MediaplayerAlarmConfig;

  public setConfig(config: MediaplayerAlarmConfig): void {
    if (!config) throw new Error(localize('config.invalid_configuration'));

    if (!config.media_player)
      throw new Error(localize('config.required_entity_missing', '%entity%', localize('config.media_player')));
    if (!config.time_attribute)
      throw new Error(localize('config.required_attribute_missing', '%attribute%', localize('config.time_attribute')));
    if (!config.enabled_attribute)
      throw new Error(
        localize('config.required_attribute_missing', '%attribute%', localize('config.enabled_attribute')),
      );
    if (!config.volume_attribute)
      throw new Error(
        localize('config.required_attribute_missing', '%attribute%', localize('config.volume_attribute')),
      );
    if (!config.source_attribute)
      throw new Error(
        localize('config.required_attribute_missing', '%attribute%', localize('config.source_attribute')),
      );
    if (!config.source_list_attribute)
      throw new Error(
        localize('config.required_attribute_missing', '%attribute%', localize('config.source_list_attribute')),
      );
    if (!config.volume_settings_attribute)
      throw new Error(
        localize('config.required_attribute_missing', '%attribute%', localize('config.volume_settings_attribute')),
      );

    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).loadCardHelpers().then(helper => {
        helper.createRowElement({ type: 'input-select-entity' });
      });
    } catch (e) {}

    this.config = config;
  }

  protected shouldUpdate(changedProps: PropertyValues): boolean {
    const shouldUpdate = hasConfigOrEntityChanged(this, changedProps, false);
    // Only check if it doesn't update anyway
    if (!shouldUpdate) {
      const changedHass: HomeAssistant = changedProps['hass'];
      return (
        !changedHass || changedHass.states[this.config!.media_player] !== this.hass!.states[this.config!.media_player]
      );
    }
    return shouldUpdate;
  }

  protected render(): TemplateResult | void {
    if (!this.config || !this.hass) {
      return html``;
    }

    const alarmEnabled = this.hass.states[this.config.media_player].attributes[this.config.enabled_attribute];
    if (alarmEnabled === null) {
      return html`
        <hui-warning
          >${this.hass.localize(
            'config.required_attribute_not_found',
            '%attribute%',
            this.config.enabled_attribute,
          )}</hui-warning
        >
      `;
    }

    const timeStr = this.hass.states[this.config.media_player].attributes[this.config.time_attribute];
    if (!timeStr) {
      return html`
        <hui-warning
          >${this.hass.localize(
            'config.required_attribute_not_found',
            '%attribute%',
            this.config.time_attribute,
          )}</hui-warning
        >
      `;
    }

    const alarmInput = this.hass.states[this.config.media_player].attributes[this.config.source_attribute];
    if (!alarmInput) {
      return html`
        <hui-warning
          >${this.hass.localize(
            'config.required_attribute_not_found',
            '%attribute%',
            this.config.source_attribute,
          )}</hui-warning
        >
      `;
    }

    const alarmInputList = this.hass.states[this.config.media_player].attributes[this.config.source_list_attribute];
    if (!alarmInputList) {
      return html`
        <hui-warning
          >${this.hass.localize(
            'config.required_attribute_not_found',
            '%attribute%',
            this.config.source_list_attribute,
          )}</hui-warning
        >
      `;
    }

    const volumeSettings = this.hass.states[this.config.media_player].attributes[this.config.volume_settings_attribute];
    if (!volumeSettings) {
      return html`
        <hui-warning
          >${this.hass.localize(
            'config.required_attribute_not_found',
            '%attribute%',
            this.config.volume_settings_attribute,
          )}</hui-warning
        >
      `;
    }

    const alarmVolume = this.hass.states[this.config.media_player].attributes[this.config.volume_attribute];
    if (!alarmVolume) {
      return html`
        <hui-warning
          >${this.hass.localize(
            'config.required_attribute_not_found',
            '%attribute%',
            this.config.volume_attribute,
          )}</hui-warning
        >
      `;
    }

    return html`
      <ha-card .header=${this.config.name} tabindex="0">
        <div class="alarm-wrapper" id="alarm-wrapper">
          <div class="alarm-time-and-decorator-wrap">
            <svg viewBox="0 0 24 24" class="alarm-time-decorator">
              <path
                d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22A9,9 0 0,0 21,13A9,9 0 0,0 12,4M7.88,3.39L6.6,1.86L2,5.71L3.29,7.24L7.88,3.39M22,5.72L17.4,1.86L16.11,3.39L20.71,7.25L22,5.72Z"
              />
            </svg>
            <div class="alarm-time-wrap">
              <span class="alarm-time-display">
                ${timeStr}
              </span>
              <input
                type="time"
                class="alarm-time-picker alarm-time-picker-left"
                required
                value="${timeStr.slice(0, 1) + ':' + timeStr.slice(2, 3)}"
                id="alarm-time-picker-left"
                @input=${this._selectedTimeValueChangedPicker}
                @blur=${this._timePickerBlur}
                @click=${this._timePickerLeftClick}
              />
              <input
                type="time"
                class="alarm-time-picker alarm-time-picker-right"
                required
                value="${timeStr.slice(0, 1) + ':' + timeStr.slice(2, 3)}"
                id="alarm-time-picker-right"
                @input=${this._selectedTimeValueChangedPicker}
                @blur=${this._timePickerBlur}
                @click=${this._timePickerRightClick}
              />
              <div class="alarm-time-input">
                <input
                  type="number"
                  required
                  min="0"
                  max="23"
                  value="${timeStr.slice(0, 1)}"
                  id="alarm-time-input-hour"
                  @input=${this._selectedTimeValueChangedInput}
                  @blur=${this._timeInputsBlur}
                  @focus=${this._timePickerLeftClick}
                /><span>:</span
                ><input
                  type="number"
                  required
                  min="0"
                  max="59"
                  value="${timeStr.slice(2, 3)}"
                  id="alarm-time-input-minute"
                  @input=${this._selectedTimeValueChangedInput}
                  @blur=${this._timeInputsBlur}
                  @focus=${this._timePickerRightClick}
                />
              </div>
            </div>
          </div>

          <div class="alarm-properties-wrap">
            <label slot="label" for="alarm-enabled">${localize('card.alarm_enabled')}</label>
            <ha-switch .checked=${alarmEnabled} @change=${this._enableChanged} id="alarm-enabled"></ha-switch>
            <label slot="label" for="alarm-input">${localize('card.alarm_source')}</label>
            <paper-dropdown-menu
              class="alarm-input"
              selected-item-label="${alarmInput}"
              @selected-item-label-changed="${this._inputChanged}"
              label="${alarmInputList[alarmInput]}"
            >
              <paper-listbox slot="dropdown-content">
                ${repeat(
                  Object.keys(alarmInputList),
                  option =>
                    html`
                      <paper-item .value="${option}">${alarmInputList[option]}</paper-item>
                    `,
                )}
              </paper-listbox>
            </paper-dropdown-menu>

            <div class="alarm-volume">
              <label slot="label" for="alarm-volume">${localize('card.alarm_volume')}</label>
              <div class="alarm-volume-slider">
                <ha-slider
                  .dir="${computeRTLDirection(this.hass!)}"
                  .step="${Number(volumeSettings.step)}"
                  .min="${Number(volumeSettings.min)}"
                  .max="${Number(volumeSettings.max)}"
                  .value="${Number(alarmVolume)}"
                  pin
                  @change="${this._volumeChanged}"
                  ignore-bar-touch
                  id="volume-input"
                ></ha-slider>
                <span>
                  ${Number(alarmVolume)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </ha-card>
    `;
  }

  static get styles(): CSSResult {
    return css`
      ha-card:focus {
        outline: none;
      }
      ha-card::-moz-focus-inner {
        border: 0;
      }

      .alarm-wrapper {
        max-width: 100%;
        padding: 5px 15px 5px 0;
        display: flex;
        align-items: stretch;
      }
      .alarm-wrapper .alarm-time-and-decorator-wrap {
        flex-basis: auto;
        flex-basis: content;
        position: relative;
        margin-right: 5px;
      }
      .alarm-wrapper .alarm-properties-wrap {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
      }

      .alarm-wrapper .alarm-time-decorator {
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        width: 100%;
        fill: var(--paper-item-icon-color, --text-color);
        opacity: 0.3;
        transition: opacity 150ms ease-in-out;
      }

      .alarm-wrapper.show-input .alarm-time-decorator,
      .alarm-wrapper.force-native-input-hour .alarm-time-decorator,
      .alarm-wrapper.force-native-input-minute .alarm-time-decorator {
        opacity: 0.07;
      }

      .alarm-wrapper .alarm-time-wrap {
        position: relative;
        font-size: 1.4rem;
        line-height: 1em;
        text-align: center;
        z-index: 2;
        top: 50%;
        margin-top: -0.2em;
      }
      .alarm-wrapper .alarm-time-display {
        box-sizing: border-box;
        position: relative;
        margin: 0 2.5rem;
      }
      .alarm-wrapper.show-input .alarm-time-display,
      .alarm-wrapper.force-native-input-hour .alarm-time-display,
      .alarm-wrapper.force-native-input-minute .alarm-time-display {
        opacity: 0;
      }
      .alarm-wrapper .alarm-time-picker {
        position: absolute;
        opacity: 0;
        width: 42%;
        top: 0;
        border: 0;
        padding: 0;
        margin: 0;
        margin-top: -0.7em;
        line-height: 3em;
        font-family: inherit;
        z-index: 2;
      }

      .alarm-wrapper .alarm-time-picker-left {
        left: 8%;
      }
      .alarm-wrapper .alarm-time-picker-right {
        left: 50%;
      }

      .alarm-wrapper.force-native-input-hour .alarm-time-picker-left {
        opacity: 1;
        width: 84%;
        left: 50%;
        transform: translate(-50%, 0);
      }
      .alarm-wrapper.force-native-input-minute .alarm-time-picker-right {
        opacity: 1;
        width: 84%;
        left: 50%;
        transform: translate(-50%, 0);
      }

      .alarm-wrapper .alarm-time-input {
        position: absolute;
        display: none;
        top: -0.4rem;
        left: 8%;
        width: 84%;
        opacity: 1;
      }
      .alarm-wrapper.show-input .alarm-time-input {
        display: block;
      }
      .alarm-wrapper .alarm-time-input input {
        width: 1.5em;
        width: 2.3ch;
        box-sizing: content-box;
        display: inline-block;
        padding: 2px;
        background: none;
        border: none;
        border-bottom: 1px solid var(--paper-input-container-color, var(--secondary-text-color));
        color: inherit;
        font-family: inherit;
        text-align: center;
        font-size: inherit;
      }
      .alarm-wrapper .alarm-time-input span {
        margin: 0 1px;
      }
      .alarm-wrapper .alarm-time-input input:focused {
        border-bottom: 1px solid var(--paper-input-container-focus-color, var(--primary-color));
      }
      .alarm-wrapper .alarm-time-input input[type='number'] {
        -moz-appearance: textfield;
      }
      .alarm-wrapper .alarm-time-input input::-webkit-outer-spin-button,
      .alarm-wrapper .alarm-time-input input::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }

      .alarm-wrapper .alarm-input {
        margin-bottom: 8px;
      }

      .alarm-wrapper .alarm-volume label {
        font-family: var(--paper-font-subhead_-_font-family);
        -webkit-font-smoothing: var(--paper-font-subhead_-_-webkit-font-smoothing);
        font-size: calc(var(--paper-font-subhead_-_font-size) * 0.75);
        font-weight: var(--paper-font-subhead_-_font-weight);
        line-height: var(--paper-font-subhead_-_line-height);
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: scale(0.75);
        transform: scale(0.75);
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }
      .alarm-wrapper .alarm-volume-slider {
        display: flex;
        align-items: center;
      }
      .alarm-wrapper .alarm-volume-slider ha-slider {
        flex-grow: 1;
        width: auto;
        margin-left: calc(-15px - var(--calculated-paper-slider-height) / 2);
      }
    `;
  }

  private _showTimeInputs(): void {
    const timeInputWrap = this.shadowRoot!.getElementById('alarm-wrapper');
    if (!timeInputWrap || this.timeInputStatus === 'shown') return;
    timeInputWrap.classList.add('show-input');
    this.timeInputStatus = 'shown';
  }

  /**
   * If the timepicker value changed, it means it was changed via popup.
   * So save it directly and hide inputs.
   */
  private _selectedTimeValueChangedPicker(ev): void {
    const newTime = ev.target.value;

    if (localStorage.getItem('mediaplayerAlarmCard.forceNativePicker') === 'true') {
      this._debounce('saveTimePickerValue', 3000, false, newTime);
    } else {
      this._saveTimePickerValue(newTime);

      // blur all input fields to hide onscreen keyboard
      const hourInput = this.shadowRoot!.getElementById('alarm-time-input-hour') as HTMLInputElement;
      hourInput.value = newTime.split(':')[0];
      hourInput?.blur();
      clearTimeout(this.inputBlurTimer);
      const minuteInput = this.shadowRoot!.getElementById('alarm-time-input-minute') as HTMLInputElement;
      minuteInput.value = newTime.split(':')[1];
      minuteInput?.blur();
      clearTimeout(this.inputBlurTimer);

      const timeInputWrap = this.shadowRoot!.getElementById('alarm-wrapper');
      if (!timeInputWrap) return;
      timeInputWrap.classList.remove('show-input', 'force-native-input-hour', 'force-native-input-minute');
      this.timeInputStatus = 'none';
    }
  }

  private _selectedTimeValueChangedInput(): void {
    this._debounce('saveTimeInputValue', 3000);
  }

  private _saveTimePickerValue(newTime: string): void {
    const timeStr = this.hass!.states[this.config!.media_player].attributes[this.config!.time_attribute];

    // Cancel if values invalid
    if (newTime === '') {
      return;
    }

    // Update time picker values
    const leftPicker = this.shadowRoot!.getElementById('alarm-time-picker-left') as HTMLInputElement;
    leftPicker.value = newTime;
    const rightPicker = this.shadowRoot!.getElementById('alarm-time-picker-right') as HTMLInputElement;
    rightPicker.value = newTime;

    if (newTime !== timeStr) {
      this.hass!.callService(this.config!.platform, 'set_alarm', {
        entity_id: this.config!.media_player,
        alarm_time: newTime,
      });
    }
  }
  private _saveTimeInputValue(): void {
    const timeStr = this.hass!.states[this.config!.media_player].attributes[this.config!.time_attribute];
    const timeInputHour = this.shadowRoot!.getElementById('alarm-time-input-hour') as HTMLInputElement;
    const timeInputMinute = this.shadowRoot!.getElementById('alarm-time-input-minute') as HTMLInputElement;
    const timeInputHourValue = Number(timeInputHour.value);
    const timeInputMinuteValue = Number(timeInputMinute.value);

    // Cancel if values invalid
    if (
      isNaN(timeInputHourValue) ||
      isNaN(timeInputMinuteValue) ||
      timeInputHourValue < 0 ||
      timeInputHourValue > 23 ||
      timeInputMinuteValue < 0 ||
      timeInputMinuteValue > 59
    ) {
      console.error(
        `Values for alarm time of '${timeInputHour.value}' hours and '${timeInputMinute.value}' is not a valid time!`,
      );
      return;
    }

    const time = ('0' + timeInputHourValue).slice(-2) + ':' + ('0' + timeInputMinuteValue).slice(-2);

    // Update time picker values
    const leftPicker = this.shadowRoot!.getElementById('alarm-time-picker-left') as HTMLInputElement;
    leftPicker.value = time;
    const rightPicker = this.shadowRoot!.getElementById('alarm-time-picker-right') as HTMLInputElement;
    rightPicker.value = time;

    if (time !== timeStr) {
      this.hass!.callService(this.config!.platform, 'set_alarm', {
        entity_id: this.config!.media_player,
        alarm_time: time,
      });
    }
  }

  /**
   * Clicked on timepicker overlaying the hour part
   */
  private _timePickerLeftClick(): void {
    this._timePickerClick(true);
  }

  /**
   * Clicked on timepicker overlaying the minute part
   */
  private _timePickerRightClick(): void {
    this._timePickerClick(false);
  }

  /**
   * The click will show a time picker popup on supported devices.
   * Show two inputs as a fallback for all other devices.
   *
   * @param focusHours Whether to focus the hours input, otherwise focuses minutes
   */
  private _timePickerClick(focusHours: boolean): void {
    if (localStorage.getItem('mediaplayerAlarmCard.forceNativePicker') === 'true') {
      const timeInputWrap = this.shadowRoot!.getElementById('alarm-wrapper');
      if (!timeInputWrap) return;

      if (focusHours) {
        timeInputWrap.classList.add('force-native-input-hour');
      } else {
        timeInputWrap.classList.add('force-native-input-minute');
      }
    } else {
      this._showTimeInputs();
      clearTimeout(this.inputBlurTimer);

      if (focusHours) {
        const input = this.shadowRoot!.getElementById('alarm-time-input-hour') as HTMLInputElement;
        input?.focus();
        this._moveCursorToEnd(input);
      } else {
        const input = this.shadowRoot!.getElementById('alarm-time-input-minute') as HTMLInputElement;
        input?.focus();
        this._moveCursorToEnd(input);
      }
    }
  }

  private _timePickerBlur(ev): void {
    if (localStorage.getItem('mediaplayerAlarmCard.forceNativePicker') === 'true') {
      this._debounce('saveTimePickerValue', 0, true, ev.target.value);
      const timeInputWrap = this.shadowRoot!.getElementById('alarm-wrapper');
      if (!timeInputWrap) return;
      timeInputWrap.classList.remove('force-native-input-hour', 'force-native-input-minute');
    }
  }

  /**
   * Saves the current data inside the time inputs when they are blurred
   * But do it with a slight delay to allow cancelling them
   */
  private _timeInputsBlur(): void {
    this.inputBlurTimer = setTimeout(() => {
      this._debounce('saveTimeInputValue', 0, true);
      const timeInputWrap = this.shadowRoot!.getElementById('alarm-wrapper');
      if (!timeInputWrap) return;
      timeInputWrap.classList.remove('show-input');
      this.timeInputStatus = 'none';
    }, 20);
  }

  /**
   * Spinner with mode has changed selected option
   */
  private _inputChanged(ev): void {
    forwardHaptic('light');
    // Selected option will transition to '' before transitioning to new value
    const sourceText = this.hass!.states[this.config!.media_player].attributes[this.config!.source_attribute];
    if (
      !ev.target!.selectedItem ||
      ev.target.selectedItem.innerText === '' ||
      ev.target.selectedItem.value === sourceText
    ) {
      return;
    }

    this.hass!.callService(this.config!.platform, 'set_alarm', {
      entity_id: this.config!.media_player,
      source: ev.target.selectedItem.value,
    });
  }

  private _volumeChanged(): void {
    const volumeInputEl = this.shadowRoot!.querySelector<HTMLInputElement>('#volume-input')!;
    const volume = this.hass!.states[this.config!.media_player].attributes[this.config!.volume_attribute];

    if (volumeInputEl.value !== volume) {
      this.hass!.callService(this.config!.platform, 'set_alarm', {
        entity_id: this.config!.media_player,
        volume: volumeInputEl.value!,
      });
    }
  }

  private _enableChanged(): void {
    const enabledSwitch = this.shadowRoot!.querySelector<HTMLInputElement>('#alarm-enabled')!;
    const enabled = this.hass!.states[this.config!.media_player].attributes[this.config!.enabled_attribute];

    if (enabledSwitch.checked !== enabled) {
      this.hass!.callService(this.config!.platform, 'set_alarm', {
        entity_id: this.config!.media_player,
        enable: enabledSwitch.checked!,
      });
    }
  }

  /**
   * Move the text cursor to the very end on the inputs value
   */
  private _moveCursorToEnd(element: HTMLInputElement): void {
    if (!element) return;
    element.focus();
    const val = element.value;
    element.value = '';
    element.value = val;
  }

  private _debounce(
    func: 'saveTimeInputValue' | 'saveTimePickerValue',
    delay: number,
    instant = false,
    newTime = '',
  ): void {
    clearTimeout(this.debounceTimer);
    switch (func) {
      case 'saveTimeInputValue':
        if (instant) this._saveTimeInputValue();
        else this.debounceTimer = setTimeout(() => this._saveTimeInputValue(), delay);
        break;
      case 'saveTimePickerValue':
        if (instant) this._saveTimePickerValue(newTime);
        else this.debounceTimer = setTimeout(() => this._saveTimePickerValue(newTime), delay);
        break;
    }
  }
}
