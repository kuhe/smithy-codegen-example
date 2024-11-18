// smithy-typescript generated code
import { WeatherServiceException as __BaseException } from "./WeatherServiceException";
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

/**
 * @public
 */
export interface CityCoordinates {
  latitude: number | undefined;
  longitude: number | undefined;
}

/**
 * @public
 */
export interface GetForecastInput {
  cityId: string | undefined;
}

/**
 * @public
 */
export interface GetForecastOutput {
  chanceOfRain?: number;
}

/**
 * @public
 */
export interface GetCityInput {
  cityId: string | undefined;
}

/**
 * @public
 */
export interface GetCityOutput {
  name: string | undefined;
  coordinates: CityCoordinates | undefined;
}

/**
 * @public
 */
export class NoSuchResource extends __BaseException {
  readonly name: "NoSuchResource" = "NoSuchResource";
  readonly $fault: "client" = "client";
  resourceType: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchResource, __BaseException>) {
    super({
      name: "NoSuchResource",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, NoSuchResource.prototype);
    this.resourceType = opts.resourceType;
  }
}

/**
 * @public
 */
export interface ListCitiesInput {
  nextToken?: string;
  pageSize?: number;
}

/**
 * @public
 */
export interface CitySummary {
  cityId: string | undefined;
  name: string | undefined;
}

/**
 * @public
 */
export interface ListCitiesOutput {
  nextToken?: string;
  items: (CitySummary)[] | undefined;
}

/**
 * @public
 */
export interface GetCurrentTimeOutput {
  time: Date | undefined;
}
