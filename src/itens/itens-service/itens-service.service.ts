import { Model } from 'mongoose';
import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { ItemInterface } from 'src/interfaces/item-interface/item-interface.interface';
import { CreateItemDto } from '../dtos/create-item.dto';
import { UpdateItemDto } from '../dtos/update-item.dto';

@Injectable()
export class ItensServiceService {
  constructor( @Inject('ITEM_MODEL') private itemModel: Model<ItemInterface>) {}

  async create(createItemDto: CreateItemDto): Promise<ItemInterface> {
    const newItem = new this.itemModel(createItemDto);
    return newItem.save();
  }

  async findAll(): Promise<ItemInterface[]> {
    return this.itemModel.find().exec();
  }

  async update(id: string, updateItemDto: UpdateItemDto): Promise<ItemInterface> {
    // Opção { new: true } retorna o documento atualizado
    const updatedItem = await this.itemModel.findByIdAndUpdate(
      id,
      { $set: updateItemDto },
      { new: true }
    );

    if (!updatedItem) {
      throw new NotFoundException(`Item com ID ${id} não encontrado`);
    }

    return updatedItem;
  }
}