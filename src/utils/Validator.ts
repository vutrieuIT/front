class Validator {
  public static isNullOrEmpty(inp: unknown | null | undefined): boolean {
    if (!inp || inp === "") return true;
    return false;
  }
}

export { Validator };
