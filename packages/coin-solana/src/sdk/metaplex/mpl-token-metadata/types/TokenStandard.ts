/**
 * The following methods are based on `mpl-token-metadata`, thanks for their work
 * https://github.com/metaplex-foundation/mpl-token-metadata/tree/main/programs/token-metadata/js/src/generated/types
 */

/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet';
/**
 * @category enums
 * @category generated
 */
export enum TokenStandard {
  NonFungible,
  FungibleAsset,
  Fungible,
  NonFungibleEdition,
  ProgrammableNonFungible,
}

/**
 * @category userTypes
 * @category generated
 */
export const tokenStandardBeet = beet.fixedScalarEnum(TokenStandard) as beet.FixedSizeBeet<
  TokenStandard,
  TokenStandard
>;
