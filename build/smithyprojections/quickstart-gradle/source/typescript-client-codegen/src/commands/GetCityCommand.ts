// smithy-typescript generated code
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  WeatherClientResolvedConfig,
} from "../WeatherClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetCityInput,
  GetCityOutput,
} from "../models/models_0";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCityCommand}.
 */
export interface GetCityCommandInput extends GetCityInput {}
/**
 * @public
 *
 * The output of {@link GetCityCommand}.
 */
export interface GetCityCommandOutput extends GetCityOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WeatherClient, GetCityCommand } from "@smithy/typescript-example-client"; // ES Modules import
 * // const { WeatherClient, GetCityCommand } = require("@smithy/typescript-example-client"); // CommonJS import
 * const client = new WeatherClient(config);
 * const input = { // GetCityInput
 *   cityId: "STRING_VALUE", // required
 * };
 * const command = new GetCityCommand(input);
 * const response = await client.send(command);
 * // { // GetCityOutput
 * //   name: "STRING_VALUE", // required
 * //   coordinates: { // CityCoordinates
 * //     latitude: Number("float"), // required
 * //     longitude: Number("float"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetCityCommandInput - {@link GetCityCommandInput}
 * @returns {@link GetCityCommandOutput}
 * @see {@link GetCityCommandInput} for command's `input` shape.
 * @see {@link GetCityCommandOutput} for command's `response` shape.
 * @see {@link WeatherClientResolvedConfig | config} for WeatherClient's `config` shape.
 *
 * @throws {@link NoSuchResource} (client fault)
 *
 * @throws {@link WeatherServiceException}
 * <p>Base exception class for all service exceptions from Weather service.</p>
 *
 *
 */
export class GetCityCommand extends $Command.classBuilder<GetCityCommandInput, GetCityCommandOutput, WeatherClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
  .ep(commonParams)
      .m(function (this: any, Command: any, cs: any, config: WeatherClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
  getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      ];
  })
  .s("Weather", "GetCity", {

  })
  .n("WeatherClient", "GetCityCommand")
  .f(void 0, void 0)
  .ser(() => { throw new Error("No supported protocol was found"); })
  .de(() => { throw new Error("No supported protocol was found"); })
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: GetCityInput;
      output: GetCityOutput;
  };
  sdk: {
      input: GetCityCommandInput;
      output: GetCityCommandOutput;
  };
};
}
