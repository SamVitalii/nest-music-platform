import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

const start = async () => {
    try {
        const PORT = process.env.PORT || 8000;
        const app = await NestFactory.create(AppModule);
        app.enableCors();

        await app.listen(PORT, () => console.log(`server successfully running on PORT: ${PORT}`));
    } catch (e) {
        console.log(e);
    }
};

start();