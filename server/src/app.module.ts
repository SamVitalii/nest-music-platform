import { Module } from "@nestjs/common";
import { TrackModule } from "./track/track.module";
import { AlbumModule } from "./album/album.module";
import { MongooseModule } from "@nestjs/mongoose";
import { FileModule } from "./file/file.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { resolve } from "path";

//TODO add process.env.DB_CONNECTION
@Module({
    imports: [
        ServeStaticModule.forRoot({ rootPath: resolve(__dirname, "static") }),
        MongooseModule.forRoot("mongodb+srv://VitaliiSam:Evesroom3008@cluster0.tkoq52q.mongodb.net/nest-music-platform?retryWrites=true&w=majority"),
        TrackModule,
        AlbumModule,
        FileModule
    ]
})
export class AppModule {
}