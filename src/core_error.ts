class CoreError extends Error {
  constructor(
    message: string,
    public readonly type: string,
    public readonly httpStatusCode: number,
    public readonly errorCode: string,
    public readonly details?: any
  ) {
    super(message)
  }
}
