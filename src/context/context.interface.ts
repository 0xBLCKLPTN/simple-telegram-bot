import { Context } from "telegraf";

export interface SessionData {
  full_name : string;
}

export interface IBotContext extends Context {
  session: SessionData;
}
