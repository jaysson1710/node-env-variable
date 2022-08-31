declare var process: Process;
interface Process{
    env: Env
}

interface Env{
    OS: string
}

interface GlobalEnvironment{
    process: Process
}