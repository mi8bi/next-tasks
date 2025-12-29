import mongoose, { Document } from "mongoose";
    
export interface Task {
    title: string;
    description: string;
    dueDate: string;
    isCompleted: boolean;
}

export interface TaskDocument extends Task, Document {
    _id: string;
    createdAt: Date;
    updatedAt: Date;
}

const taskSchema =  new mongoose.Schema<TaskDocument>({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    dueDate: {
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
}); 

export const TaskModel = mongoose.models.Task || mongoose.model('Task', taskSchema);