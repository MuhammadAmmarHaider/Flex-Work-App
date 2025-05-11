import React from 'react'
import { Link } from 'react-router-dom'
import CategoryCard from './CategoryCard'

function TalentCategories() {
    const categories = [
        { id: 1, name: "Development & IT", rating: 4.85, skills: 1853 },
        { id: 2, name: "AI Services", rating: 4.8, skills: 294 },
        { id: 3, name: "Design & Creative", rating: 4.91, skills: 968 },
        { id: 4, name: "Sales & Marketing", rating: 4.77, skills: 392 },
        { id: 5, name: "Writing & Translation", rating: 4.92, skills: 505 },
        { id: 6, name: "Admin & Customer Support", rating: 4.77, skills: 508 },
        { id: 7, name: "Finance & Accounting", rating: 4.79, skills: 214 },
        { id: 8, name: "Engineering & Architecture", rating: 4.85, skills: 650 },
    ]

    return (
        <div className="px-20 py-16">
            <h2 className="text-7xl font-bold mb-16">Browse talent by category</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {categories.map((category) => (
                    <Link to="" key={category.id}>
                        <CategoryCard category={category} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default TalentCategories
