import { FheTypes } from "./base";

export type EncryptedNumber = {
  data: Uint8Array;
  securityZone: number;
};

// TODO: Remove this after `encrypt` removed (in favor of zkpok)
// TODO: Migrate `encrypt` validations to Encryptables
export interface EncryptedBool extends EncryptedNumber {}
export interface EncryptedUint8 extends EncryptedNumber {}
export interface EncryptedUint16 extends EncryptedNumber {}
export interface EncryptedUint32 extends EncryptedNumber {}
export interface EncryptedUint64 extends EncryptedNumber {}
export interface EncryptedUint128 extends EncryptedNumber {}
export interface EncryptedUint256 extends EncryptedNumber {}
export interface EncryptedAddress extends EncryptedNumber {}

export type FHEInItem = {
  securityZone: number;
  hash: bigint;
  signature: string;
  utype: FheTypes;
};
export type FHEInBool = FHEInItem & {
  utype: FheTypes.Bool;
};
export type FHEInUint8 = FHEInItem & {
  utype: FheTypes.Uint8;
};
export type FHEInUint16 = FHEInItem & {
  utype: FheTypes.Uint16;
};
export type FHEInUint32 = FHEInItem & {
  utype: FheTypes.Uint32;
};
export type FHEInUint64 = FHEInItem & {
  utype: FheTypes.Uint64;
};
export type FHEInUint128 = FHEInItem & {
  utype: FheTypes.Uint128;
};
export type FHEInUint256 = FHEInItem & {
  utype: FheTypes.Uint256;
};
export type FHEInAddress = FHEInItem & {
  utype: FheTypes.Uint160;
};
