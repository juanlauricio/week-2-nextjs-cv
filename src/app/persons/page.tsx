import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { deletePerson } from "@/app/actions/persons";

export default async function PersonsPage() {
  const persons = await prisma.person.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-blue-900 text-white py-8 px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Person Directory</h1>
            <p className="text-blue-200 mt-1">Manage all persons in the database</p>
          </div>
          <Link
            href="/persons/new"
            className="bg-white text-blue-900 font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-100 transition-colors shadow"
          >
            + Add Person
          </Link>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-10">
        {persons.length === 0 ? (
          <div className="text-center py-20 text-slate-400">
            <p className="text-xl mb-4">No persons yet.</p>
            <Link href="/persons/new" className="text-blue-600 hover:underline font-medium">
              Add the first person →
            </Link>
          </div>
        ) : (
          <div className="grid gap-4">
            {persons.map((person) => (
              <div
                key={person.id}
                className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 flex items-center justify-between hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-lg">
                    {person.firstName[0]}{person.lastName[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 text-lg">
                      {person.firstName} {person.lastName}
                    </p>
                    <p className="text-slate-500 text-sm">{person.email}</p>
                    {person.company && (
                      <p className="text-slate-400 text-xs mt-0.5">{person.company}</p>
                    )}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Link
                    href={`/persons/${person.id}`}
                    className="text-sm px-4 py-1.5 rounded-lg border border-blue-200 text-blue-700 hover:bg-blue-50 transition-colors"
                  >
                    View
                  </Link>
                  <Link
                    href={`/persons/${person.id}/edit`}
                    className="text-sm px-4 py-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors"
                  >
                    Edit
                  </Link>
                  <form
                    action={async () => {
                      "use server";
                      await deletePerson(person.id);
                    }}
                  >
                    <button
                      type="submit"
                      className="text-sm px-4 py-1.5 rounded-lg border border-red-200 text-red-600 hover:bg-red-50 transition-colors"
                    >
                      Delete
                    </button>
                  </form>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
