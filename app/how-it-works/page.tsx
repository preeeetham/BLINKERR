import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function HowItWorksPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-12 gradient-text text-center">How Solana Actions Blinks Work</h1>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-4">What are Solana Actions Blinks?</h2>
          <p className="text-gray-300 mb-4">
            Solana Actions Blinks are shareable links that allow anyone to send SOL to your wallet with just a few
            clicks. They're perfect for creators, developers, and businesses who want to accept payments or donations
            quickly and easily.
          </p>
          <p className="text-gray-300 mb-4">
            Each Blink contains customizable information like a title, description, and image, making it easy to
            communicate what the payment is for.
          </p>
          <p className="text-gray-300">
            Blinks are powered by Solana Actions, a protocol that enables interactive transactions on the Solana
            blockchain.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="relative w-full max-w-sm overflow-hidden rounded-xl border border-white/10 bg-black/20 p-2 shadow-2xl">
            <Image
              src="/placeholder.svg?key=w5nf3"
              width={400}
              height={600}
              alt="Solana Blink Preview"
              className="rounded-lg"
            />
            <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-black/80 backdrop-blur-sm p-4">
              <h3 className="text-lg font-semibold text-white">Support Your Favorite Creator</h3>
              <p className="text-sm text-gray-300 mb-3">Send SOL directly with one click</p>
              <div className="grid grid-cols-3 gap-2">
                <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm py-1 rounded-md">
                  0.1 SOL
                </button>
                <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm py-1 rounded-md">1 SOL</button>
                <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm py-1 rounded-md">5 SOL</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card p-8 mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Creating and Sharing Blinks</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 text-white text-xl font-bold mb-4">
              1
            </div>
            <h3 className="text-xl font-bold mb-2">Create Your Blink</h3>
            <p className="text-gray-300">
              Connect your wallet, add a title, description, and image to customize your Blink.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 text-white text-xl font-bold mb-4">
              2
            </div>
            <h3 className="text-xl font-bold mb-2">Generate Link</h3>
            <p className="text-gray-300">
              Sign a small transaction to register your Blink and get a unique shareable link.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 text-white text-xl font-bold mb-4">
              3
            </div>
            <h3 className="text-xl font-bold mb-2">Share & Collect</h3>
            <p className="text-gray-300">
              Share your Blink link on social media, websites, or directly with your audience.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Technical Details</h2>

        <div className="card p-6 mb-6">
          <h3 className="text-xl font-bold mb-2">How Solana Actions Work</h3>
          <p className="text-gray-300 mb-4">
            Solana Actions is a protocol that enables interactive transactions on the Solana blockchain. When you create
            a Blink, we register it in Dialect's blink registry with a unique URL.
          </p>
          <p className="text-gray-300">
            When someone clicks on your Blink link (with the prefix https://dial.to/?action=solana-action:), the Dialect
            service checks if the link is registered and displays your Blink information. When a user clicks a button in
            your Blink, it triggers a transaction that they can sign with their wallet.
          </p>
        </div>

        <div className="card p-6">
          <h3 className="text-xl font-bold mb-2">Security</h3>
          <p className="text-gray-300 mb-4">
            All transactions are secured by the Solana blockchain. Users always have full control over their funds and
            must explicitly approve any transaction with their wallet.
          </p>
          <p className="text-gray-300">
            Our service never has access to your private keys or funds. We simply facilitate the creation and sharing of
            Blinks.
          </p>
        </div>
      </div>

      <div className="card p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Create Your First Blink?</h2>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          Start accepting SOL payments and donations with just a few clicks. Create your first Blink now and share it
          with your audience.
        </p>
        <Link href="/create" className="button-primary inline-flex items-center gap-2">
          Create Your Blink
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
