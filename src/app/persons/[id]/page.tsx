import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { deletePerson } from "@/app/actions/persons";

export default async function PersonPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const person = await prisma.person.findUnique({ where: { id } });

  if (!person) notFound();

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-blue-900 text-white py-8 px-6">
        <div className="max-w-3xl mx-auto">
          <Link href="/persons" className="text-blue-300 hover:text-white text-sm mb-3 inline-block">
            ← Back to Directory
          </Link>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-blue-500 border-4 border-blue-300 flex items-center justify-center font-bold text-2xl">
              {person.firstName[0]}{person.lastName[0]}
            </div>
            <div>
              <h1 className="text-3xl font-bold">{person.firstName} {person.lastName}</h1>
              {person.company && <p className="text-blue-200 mt-0.5">{person.company}</p>}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-10">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
          <div className="grid grid-cols-2 gap-6">
            <Field label="Email" value={person.email} />
            <Field label="Phone" value={person.phone} />
            <Field label="Company" value={person.company} />
            <Field label="Website" value={person.website} />
            <Field label="Address" value={person.address} />
            <Field label="City" value={person.city} />
            <Field label="Country" value={person.country} />
            <Field label="Member Since" value={new Date(person.createdAt).toLocaleDateString()} />
          </div>
          {person.bio && (
            <div className="mt-6 pt-6 border-t border-slate-100">
              <p className="text-sm font-medium text-slate-500 mb-1">Bio</p>
              <p className="text-slate-700 leading-relaxed">{person.bio}</p>
            </div>
          )}
        </div>

        <div className="flex gap-3 mt-6">
          <Link
            href={`/persons/${id}/edit`}
            className="bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-blue-800 transition-colors"
          >
            Edit Person
          </Link>
          <form
            action={async () => {
              "use server";
              await deletePerson(id);
            }}
          >
            <button
              type="submit"
              className="px-6 py-2.5 rounded-lg border border-red-300 text-red-600 hover:bg-red-50 transition-colors font-medium"
            >
              Delete Person
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string | null | undefined }) {
  if (!value) return null;
  return (
    <div>
      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-0.5">{label}</p>
      <p className="text-slate-800">{value}</p>
    </div>
  );
}
