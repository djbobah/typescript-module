//TODO Напишите и типизируйте функцию, рассчитывающую стоимость с учетом скидки и рассрочки на заданное количество месяцев:

type TotalPriceType = {
  price: number;
  discount?: number;
  isInstallment?: boolean;
  months?: number;
};

export const totalPrice = ({
  price,
  discount = 0,
  isInstallment = false,
  months = 12,
}: TotalPriceType): number => {
  if (isInstallment) {
    return (price * (1 - discount / 100)) / months;
  } else return price * (1 - discount / 100);
};
