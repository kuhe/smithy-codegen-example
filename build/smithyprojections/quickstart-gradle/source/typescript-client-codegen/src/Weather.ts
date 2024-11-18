// smithy-typescript generated code
import {
  WeatherClient,
  WeatherClientConfig,
} from "./WeatherClient";
import {
  GetCityCommand,
  GetCityCommandInput,
  GetCityCommandOutput,
} from "./commands/GetCityCommand";
import {
  GetCurrentTimeCommand,
  GetCurrentTimeCommandInput,
  GetCurrentTimeCommandOutput,
} from "./commands/GetCurrentTimeCommand";
import {
  GetForecastCommand,
  GetForecastCommandInput,
  GetForecastCommandOutput,
} from "./commands/GetForecastCommand";
import {
  ListCitiesCommand,
  ListCitiesCommandInput,
  ListCitiesCommandOutput,
} from "./commands/ListCitiesCommand";
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

const commands = {
  GetCityCommand,
  GetCurrentTimeCommand,
  GetForecastCommand,
  ListCitiesCommand,
}

export interface Weather {
  /**
   * @see {@link GetCityCommand}
   */
  getCity(
    args: GetCityCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetCityCommandOutput>;
  getCity(
    args: GetCityCommandInput,
    cb: (err: any, data?: GetCityCommandOutput) => void
  ): void;
  getCity(
    args: GetCityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCityCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCurrentTimeCommand}
   */
  getCurrentTime(): Promise<GetCurrentTimeCommandOutput>;
  getCurrentTime(
    args: GetCurrentTimeCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetCurrentTimeCommandOutput>;
  getCurrentTime(
    args: GetCurrentTimeCommandInput,
    cb: (err: any, data?: GetCurrentTimeCommandOutput) => void
  ): void;
  getCurrentTime(
    args: GetCurrentTimeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCurrentTimeCommandOutput) => void
  ): void;

  /**
   * @see {@link GetForecastCommand}
   */
  getForecast(
    args: GetForecastCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetForecastCommandOutput>;
  getForecast(
    args: GetForecastCommandInput,
    cb: (err: any, data?: GetForecastCommandOutput) => void
  ): void;
  getForecast(
    args: GetForecastCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetForecastCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCitiesCommand}
   */
  listCities(): Promise<ListCitiesCommandOutput>;
  listCities(
    args: ListCitiesCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<ListCitiesCommandOutput>;
  listCities(
    args: ListCitiesCommandInput,
    cb: (err: any, data?: ListCitiesCommandOutput) => void
  ): void;
  listCities(
    args: ListCitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCitiesCommandOutput) => void
  ): void;

}

/**
 * Provides weather forecasts.
 * @public
 */
export class Weather extends WeatherClient implements Weather {}
createAggregatedClient(commands, Weather);
