import { EntityRepository, Repository } from "typeorm";
import { Setting } from "../entities/Setting";

@EntityRepository(Setting)
class SettingsRepository extends Repository<Setting> {}; 

export { SettingsRepository }

// Estamos estendendo todos os metodos do Repository para o 
// SettingsRepository, assim seremos capazes de usar esse metodos no SettingsRepo..