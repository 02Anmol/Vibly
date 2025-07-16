import mongoose from 'mongoose';

const storySchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
        },
    mediaType:{
        tyoe: String,
        enum: ['image', 'video'],
        required: true
    },
    media:{
        type: String,
        required: true
    },
    viewers:[
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
        },
    ],
    createdAt:{
        type: Date,
        default: Date.now,
        expires: 84600 // Automatically delete the story after 24 hours
    }
},{timeStamps:true});

const Story = mongoose.model('Story', storySchema);
export default Story;