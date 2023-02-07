import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Album, AlbumDocument } from "./schemas/album.schema";
import { Model, ObjectId } from "mongoose";
import { CreateAlbumDto } from "./dto/create-album.dto";
import { FileService, FileType } from "../file/file.service";

@Injectable()
export class AlbumService {

    constructor(@InjectModel(Album.name) private albumModel: Model<AlbumDocument>,
                private fileService: FileService) {
    }


    async getAll(count = 10, offset = 0): Promise<Album[]> {
        return await this.albumModel.find().skip(Number(offset)).limit(Number(count));
    }

    async create(dto: CreateAlbumDto, picture): Promise<Album> {
        const picturePath = this.fileService.createFile(FileType.IMAGE, picture);
        const album = await this.albumModel.create({ ...dto, picture: picturePath });
        return album;
    }


    async getOne(id: ObjectId): Promise<Album> {
        const album = await this.albumModel.findById(id).populate("tracks");
        return album;
    }

    async delete(id: ObjectId): Promise<ObjectId> {
        const album = await this.albumModel.findByIdAndDelete(id);
        return album.id;
    }
}