import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { updatePerson } from "@/app/actions/persons";

export default async function EditPersonPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const person = await prisma.person.findUnique({ where: { id } });

  if (!person) notFound();

  const updatePersonWithId = updatePerson.bind(null, id);

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-blue-900 text-white py-8 px-6">
        <div className="max-w-2xl mx-auto">
          <Link href={`/persons/${id}`} className="text-blue-300 hover:text-white text-sm mb-3 inline-block">
            ← Back to Profile
          </Link>
          <h1 className="text-3xl font-bold">Edit Person</h1>
          <p className="text-blue-200 mt-1">{person.firstName} {person.lastName}</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-10">
        <form action={updatePersonWithId} className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">First Name *</label>
              <input name="firstName" required defaultValue={person.firstName} className="w-full border border-slate-300 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Last Name *</label>
              <input name="lastName" required defaultValue={person.lastName} className="w-full border border-slate-300 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
            <input name="email" type="email" required defaultValue={person.email} className="w-full border border-slate-300 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
              <input name="phone" defaultValue={person.phone ?? ""} className="w-full border border-slate-300 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Company</label>
              <input name="company" defaultValue={person.company ?? ""} className="w-full border border-slate-300 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Address</label>
            <input name="address" defaultValue={person.address ?? ""} className="w-full border border-slate-300 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">City</label>
              <input name="city" defaultValue={person.city ?? ""} className="w-full border border-slate-300 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Country</label>
              <input name="country" defaultValue={person.country ?? ""} className="w-full border border-slate-300 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Website</label>
            <input name="website" type="url" defaultValue={person.website ?? ""} placeholder="https://" className="w-full border border-slate-300 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Bio</label>
            <textarea name="bio" rows={3} defaultValue={person.bio ?? ""} className="w-full border border-slate-300 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" />
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              className="bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-blue-800 transition-colors"
            >
              Save Changes
            </button>
            <Link
              href={`/persons/${id}`}
              className="px-6 py-2.5 rounded-lg border border-slate-300 text-slate-600 hover:bg-slate-50 transition-colors font-medium"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
