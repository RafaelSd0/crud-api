import { Connection } from 'mongoose';
import { ItemSchema } from 'src/schemas/item.schema';


export const ItensProvider = [
  {
    provide: 'ITEM_MODEL',
    useFactory: (connection: Connection) => connection.model('Item', ItemSchema),
    inject: ['DATABASE_CONNECTION'],
  }
];
