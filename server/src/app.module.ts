import { ConfigModule } from "@nestjs/config";
import { Module } from "@nestjs/common";
import { TrackModule } from "./track/track.module";
import { AlbumModule } from "./album/album.module";
import { MongooseModule } from "@nestjs/mongoose";
import { FileModule } from "./file/file.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { resolve } from "path";

@Module({
    imports: [
        ConfigModule.forRoot(),
        ServeStaticModule.forRoot({ rootPath: resolve(__dirname, "static") }),
        MongooseModule.forRoot(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.tkoq52q.mongodb.net/${process.env.MONGO_DEFAULT_DATABASE}?retryWrites=true&w=majority`),
        TrackModule,
        AlbumModule,
        FileModule
    ]
})
export class AppModule {
}