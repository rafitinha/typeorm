import { table } from "console";
import {MigrationInterface, QueryRunner} from "typeorm";

export class PostRefactoringClass1617922520885 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn('class','update_at','updated_at');
    
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn('class','updated_at','update_at');
  }

}
