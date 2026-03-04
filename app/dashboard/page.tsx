import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'

export default async function DashboardPage() {
    const supabase = await createClient()

    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
        redirect('/login')
    }

    // Fetch the subscription status securely from the database
    const { data: subData } = await supabase
        .from('subscriptions')
        .select('*')
        .eq('user_email', data.user.email)
        .single();

    const isPremium = subData?.status === 'active';
    const planName = subData?.plan_name || 'Pro Plan';

    return (
        <div className="min-h-screen bg-[#050A15] p-8">
            <div className="max-w-4xl mx-auto">
                <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
                    <Link href="/">
                        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 font-heading tracking-tight">
                            NexusAI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Pro</span>
                        </h1>
                    </Link>
                    <div className="flex items-center gap-6">
                        <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">
                            Read News
                        </Link>
                        <form action="/auth/signout" method="post">
                            <button className="text-sm px-4 py-2 rounded-lg bg-red-500/10 text-red-500 hover:bg-red-500/20 transition-colors font-medium">
                                Sign Out
                            </button>
                        </form>
                    </div>
                </header>

                <main className="bg-[#0A0F1E] border border-gray-800 rounded-2xl p-8 shadow-xl">
                    <div className="flex items-center gap-4 mb-2">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-xl font-bold text-white uppercase">
                            {data.user.email?.charAt(0)}
                        </div>
                        <div>
                            <h2 className="text-xl text-white font-semibold">Welcome back!</h2>
                            <p className="text-gray-400">{data.user.email}</p>
                        </div>
                    </div>

                    <hr className="border-gray-800 my-8" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className={`p-6 rounded-xl border flex flex-col h-full ${isPremium ? 'border-[rgba(0,212,255,0.4)] bg-[rgba(0,212,255,0.05)] shadow-[0_0_20px_rgba(0,212,255,0.1)]' : 'border-[rgba(124,58,237,0.3)] bg-[rgba(124,58,237,0.05)]'}`}>
                            <div className={isPremium ? "text-cyan-400 mb-2 font-medium" : "text-purple-400 mb-2 font-medium"}>
                                {isPremium ? '👑 Subscription Status' : '💎 Subscription Status'}
                            </div>
                            <div className="text-2xl text-white font-bold mb-4">{isPremium ? planName : 'Free Plan'}</div>

                            {isPremium ? (
                                <>
                                    <p className="text-sm text-gray-400 mb-6 flex-grow">Your Premium account is active. You have full access to zero ads, breaking news alerts, and early briefings.</p>
                                    <div className="inline-block text-center py-3 px-4 rounded-xl border border-cyan-500/30 text-cyan-400 text-sm font-medium">
                                        Active Subscription
                                    </div>
                                </>
                            ) : (
                                <>
                                    <p className="text-sm text-gray-400 mb-6 flex-grow">You are currently on the free tier. Upgrade to Pro to remove all ads and unlock early access.</p>
                                    <Link href="/premium" className="inline-block text-center py-3 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-sm font-medium transition-all shadow-lg shadow-purple-900/20">
                                        Upgrade to Pro
                                    </Link>
                                </>
                            )}
                        </div>

                        <div className="p-6 rounded-xl border border-gray-800 bg-[#050A15] flex flex-col h-full">
                            <div className="text-cyan-400 mb-2 font-medium">✉️ Newsletter</div>
                            <div className="text-xl text-white font-bold mb-4">NexusAI Daily</div>
                            <p className="text-sm text-gray-400 mb-6 flex-grow">You are configured to receive our top 5 AI stories directly to your inbox every morning at 7:00 AM EST.</p>
                            <div className="py-3 px-4 rounded-xl bg-gray-800/50 text-gray-400 text-sm text-center border border-gray-800 cursor-not-allowed">
                                Settings Managed via Email
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
