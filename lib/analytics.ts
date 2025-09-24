export const track = (event: string, data: Record<string, unknown> = {}) => {
  // stubbed analytics
  // eslint-disable-next-line no-console
  console.log(`[analytics] ${event}`, data);
};
