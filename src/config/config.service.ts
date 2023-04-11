import { DotenvParseOutput, config } from 'dotenv';
import { IConfigService } from './config.interface';

export class ConfigService implements IConfigService {
  private config: DotenvParseOutput;

  constructor() {
    const { error, parsed } = config();
    
    if ( error ) {
      throw new Error("Cannot find .env file.")
    }
    
    if ( !parsed ) {
      throw new Error(".env file is blank.")
    }

    this.config = parsed;
  
  }

  get( key: string ): string {
    const res = this.config[key];

    if ( !res ) {
      throw new Error("Cannot key in .env file.");
    }
    return res;
  }
}
