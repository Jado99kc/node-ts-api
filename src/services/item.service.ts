import { Car } from "../interfaces/car.interface";
import ItemModel from "../models/item.model";

const insertCar = async (item: Car) => {
  const responseInsert = await ItemModel.create(item);
  return responseInsert;
};

const getCars = async () => {
  const responseItem = await ItemModel.find({});
  return responseItem;
};

const getCar = async (id: string) => {
  const responseItem = await ItemModel.findOne({ _id: id });
  return responseItem;
};
export { insertCar, getCars, getCar };
