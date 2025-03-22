const isValidNumber = (str: string) => /^\d+$/.test(str);

const formatCardNumber = (value: string) => {
   const digitsOnly = value.replace(/\D/g, "");

   const truncated = digitsOnly.slice(0, 16);

   return truncated.replace(/(\d{4})/g, "$1 ").trim();
};

const unformatCardNumber = (formattedValue: string) => {
   return formattedValue.replace(/\D/g, "");
};

const splitCardNumber = (value: string) => {
   return [
      value.slice(0, 4),
      value.slice(4, 8),
      value.slice(8, 12),
      value.slice(12)
   ];
};

const wait = (seconds: number) =>
   new Promise((resolve) => setTimeout(resolve, seconds * 1000));

export {
   isValidNumber,
   formatCardNumber,
   unformatCardNumber,
   wait,
   splitCardNumber
};
