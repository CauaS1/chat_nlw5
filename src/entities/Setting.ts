import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

import { v4 as uuid } from 'uuid';

@Entity("settings")
class Setting {
  
  @PrimaryColumn()
  id: string;

  @Column()
  username: string;

  @Column()
  chat: boolean;

  @UpdateDateColumn()
  updated_at: Date;

  @CreateDateColumn()
  created_at: Date;

  constructor() { //Every time that this class is called (new Setting)
    if (!this.id) {  //its going to check if there is something in the id, and in case
      this.id = uuid() //of being null, its going to add the uuid()
    }
  }
}

export { Setting }