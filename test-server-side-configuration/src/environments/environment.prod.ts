import 'angular-server-side-configuration/process';

/**
 * How to use angular-server-side-configuration:
 *
 * Use process.env['NAME_OF_YOUR_ENVIRONMENT_VARIABLE']
 *
 * export const environment = {
 *   stringValue: process.env['STRING_VALUE'],
 *   stringValueWithDefault: process.env['STRING_VALUE'] || 'defaultValue',
 *   numberValue: Number(process.env['NUMBER_VALUE']),
 *   numberValueWithDefault: Number(process.env['NUMBER_VALUE'] || 10),
 *   booleanValue: Boolean(process.env['BOOLEAN_VALUE']),
 *   booleanValueInverted: process.env['BOOLEAN_VALUE_INVERTED'] !== 'false',
 * };
 * 
 * Please note that process.env[variable] cannot be resolved. Please directly use strings.
 */

export const environment = {
  production: true,
  Path: process.env["Path"],
  OS1: process.env["OS1"],
  Test: process.env["Test"],
  Test1: process.env["Test1"],
};
