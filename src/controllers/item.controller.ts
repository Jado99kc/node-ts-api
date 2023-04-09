import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handler";
import { insertCar, getCars, getCar } from "../services/item.service";

const getItem = async ({ params: { id } }: Request, res: Response) => {
  try {
    const car = await getCar(id);
    res.send(car);
  } catch (error) {
    handleHttp(res, "GET_ITEM_ERROR", error);
  }
};
const getItems = async (req: Request, res: Response) => {
  try {
    const cars = await getCars();
    res.send(cars);
  } catch (error) {
    handleHttp(res, "GET_ITEMS_ERROR", error);
  }
};
const postItem = async ({ body }: Request, res: Response) => {
  try {
    const car = await insertCar(body);
    res.send(car);
  } catch (error) {
    handleHttp(res, "POST_ITEM_ERROR", error);
  }
};
const updateItem = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "UPDATE_ITEM_ERROR");
  }
};
const deleteItem = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "DELETE_ITEM_ERROR");
  }
};

export { getItem, getItems, postItem, updateItem, deleteItem };
