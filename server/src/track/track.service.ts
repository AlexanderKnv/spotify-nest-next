import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Track } from "./schemas/track.schema";
import { Comment } from "./schemas/comment.schema";
import { Model } from "mongoose";



@Injectable()
export class TrackService {

    constructor(@InjectModel(Track.name) private trackModel: Model<Track>,
                @InjectModel(Comment.name) private commentModel: Model<Comment>) {}

    async create() {

    }

    async getAll() {

    }

    async getOne() {

    }

    async delete() {

    }
}