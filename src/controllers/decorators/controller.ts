import "reflect-metadata";
import { AppRouter } from "../../AppRouter";
// import express from "express";

// export const router = express.Router(); deleted this beciase we now only have one instance coming from AppRouter

export function controller(routePrefix: string) {
  return function (target: Function) {
    const router = AppRouter.getInstance();

    for (let key in target.prototype) {
      const routeHandler = target.prototype[key];
      const path = Reflect.getMetadata("path", target.prototype, key);

      if (path) {
        router.get(`${routePrefix}${path}`, routeHandler);
      }
    }
  };
}