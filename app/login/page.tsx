import { login, signup } from './actions'
import Link from 'next/link'

export default async function LoginPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    const resolvedParams = await searchParams;
    const errorMsg = resolvedParams?.error as string | undefined;

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#050A15] px-4">
            <div className="w-full max-w-md p-8 rounded-2xl bg-[#0A0F1E] border border-[rgba(124,58,237,0.2)] shadow-[0_0_40px_rgba(124,58,237,0.1)]">
                <div className="text-center mb-8">
                    <Link href="/" className="inline-block">
                        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 font-heading tracking-tight">
                            NexusAI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Pro</span>
                        </h1>
                    </Link>
                    <p className="text-gray-400 mt-2 text-sm">Sign in to access your premium benefits.</p>
                </div>

                {errorMsg && (
                    <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-sm text-center">
                        {errorMsg}
                    </div>
                )}

                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="email">Email Address</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className="w-full px-4 py-3 rounded-xl bg-[#050A15] border border-gray-800 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                            placeholder="you@example.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="password">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            className="w-full px-4 py-3 rounded-xl bg-[#050A15] border border-gray-800 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                            placeholder="••••••••"
                        />
                    </div>

                    <div className="pt-2 flex flex-col gap-3">
                        <button
                            formAction={login}
                            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:from-cyan-400 hover:to-blue-500 transition-all transform hover:scale-[1.02] shadow-[0_0_20px_rgba(0,212,255,0.3)]"
                        >
                            Sign In
                        </button>
                        <button
                            formAction={signup}
                            className="w-full py-3 px-4 rounded-xl bg-transparent border border-gray-700 text-gray-300 font-medium hover:bg-gray-800 transition-all"
                        >
                            Create Account
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
