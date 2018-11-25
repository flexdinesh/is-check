declare module "typy" {

	export default function typy (input: any, objectPath?: string): Typy
	export function setCustomTypes(typy: Typy, validators: any): void

	class Typy {

		t: (obj: any, nestedKeys?: string) => Typy

		readonly isDefined: boolean
		readonly isUndefined: boolean
		readonly isNull: boolean
		readonly isNullOrUndefined: boolean
		readonly isBoolean: boolean
		readonly isTrue: boolean
		readonly isFalse: boolean
		readonly isTruthy: boolean
		readonly isFalsy: boolean
		readonly isObject: boolean
		readonly isEmptyObject: boolean
		readonly isString: boolean
		readonly isEmptyString: boolean
		readonly isNumber: boolean
		readonly isArray: boolean
		readonly isEmptyArray: boolean
		readonly isFunction: boolean
		readonly safeObject: any
		readonly safeString: string

	}

}
