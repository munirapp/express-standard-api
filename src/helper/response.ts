import * as dayjs from "dayjs";

const memory_format = (data) => {
  const heap = data / 1024 / 1024;
  return `${Math.round(heap * 100) / 100} MB`;
};

const data_type_check = (data) =>
  Array.isArray(data) ? [...data] : { ...data };

export default {
  start_time: () => dayjs(),
  format: (time, data, message) => ({
    diagnostic: {
      request_time: `${time.format("YYYY-MM-DD hh:mm:ss")} (GMT+8)`,
      execution_time: `${dayjs().diff(dayjs(time), "millisecond", true)} ms`,
      memory_usage: memory_format(process.memoryUsage().heapUsed),
      message,
    },
    data: data_type_check(data),
  }),
};
