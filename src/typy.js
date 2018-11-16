import { getNestedObject, convertSchemaAndGetMatch } from './util';

class Typy {
  constructor() {
    this.Number = 1;
    this.String = 'typy';
    this.Boolean = true;
    this.Null = null;
    this.Undefined = undefined;
    /* istanbul ignore next */
    this.Function = () => {};
  }

  t = (obj, nestedKeys) => {
    this.input = obj;
    this.schemaCheck = null;

    if (nestedKeys) {
      if (typeof nestedKeys === 'string') {
        this.input = getNestedObject(this.input, nestedKeys);
      } else {
        const checkSchema = convertSchemaAndGetMatch(this.input, nestedKeys);
        if (checkSchema !== -1) {
          this.schemaCheck = true;
          this.input = checkSchema;
        } else {
          this.schemaCheck = false;
          this.input = obj;
        }
      }
    }

    return this;
  };

  get isValid() {
    if (this.schemaCheck !== null && this.schemaCheck === true
      && this.input !== null && this.input !== undefined) { return true; }
    return false;
  }

  get isDefined() {
    if (typeof this.input !== 'undefined') return true;
    return false;
  }

  get isUndefined() {
    if (typeof this.input === 'undefined') return true;
    return false;
  }

  get isNull() {
    if (this.input === null && typeof this.input === 'object') return true;
    return false;
  }

  get isNullOrUndefined() {
    if (this.isNull || this.isUndefined) return true;
    return false;
  }

  get isBoolean() {
    if (typeof this.input === typeof true) return true;
    return false;
  }

  get isTrue() {
    if (this.input === true) return true;
    return false;
  }

  get isFalse() {
    if (this.input === false) return true;
    return false;
  }

  get isTruthy() {
    if (this.input) return true;
    return false;
  }

  get isFalsy() {
    if (!this.input) return true;
    return false;
  }

  get isObject() {
    if (
      typeof this.input === 'object' &&
      this.input === Object(this.input) &&
      Object.prototype.toString.call(this.input) !== '[object Array]'
    ) {
      return true;
    }
    return false;
  }

  get isEmptyObject() {
    if (this.isObject && Object.keys(this.input).length === 0) return true;
    return false;
  }

  get isString() {
    if (typeof this.input === 'string') return true;
    return false;
  }

  get isEmptyString() {
    if (this.isString && this.input.length === 0) return true;
    return false;
  }

  get isNumber() {
    if (Number.isFinite(this.input)) return true;
    return false;
  }

  get isArray() {
    if (Array.isArray(this.input)) return true;
    return false;
  }

  get isEmptyArray() {
    if (this.isArray && this.input.length === 0) return true;
    return false;
  }

  get isFunction() {
    if (typeof this.input === 'function') return true;
    return false;
  }

  get safeObject() {
    return this.input;
  }

  get safeString() {
    if (this.isString) return this.input;
    return '';
  }

  get safeNumber() {
    if (this.isNumber) return this.input;
    return 0;
  }

  get safeBoolean() {
    if (this.isBoolean) return this.input;
    return false;
  }

  get safeFunction() {
    if (this.isFunction) return this.input;
    return /* istanbul ignore next */ () => {};
  }
}

export default Typy;
