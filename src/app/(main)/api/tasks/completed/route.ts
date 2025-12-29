import { TaskDocument, TaskModel } from "@/models/task"
import { connectDB } from "@/utils/database"
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        await connectDB()
        const completedTasks: TaskDocument[] = await TaskModel.find(
            { isCompleted: true },
        );
        return NextResponse.json({ message: 'タスク取得成功', tasks: completedTasks }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: 'タスク取得失敗' }, { status: 500 });
    }
}

export const dynamic = 'force-dynamic';