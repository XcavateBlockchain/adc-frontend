"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

import { Textarea } from "@/components/ui/textarea";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Label } from "@/components/ui/label";

export default function BountyForm() {
	const [currentPage, setCurrentPage] = useState(1);
	const [formData, setFormData] = useState({
		// Page 1 fields
		proposal: "",
		eventType: "",
		sponsorshipDetails: "",
		collaboratingProjects: "",
		eventPurpose: "",
		polkadotBenefit: "",
		designsMerch: "",
		designProposal: "",
		sponsorshipVenue: "",
		followUp: "",
		targetAudience: "",
		attendeeDetails: "",
		postEventReach: "",
		marketingStrategy: "",
		documentation: "",

		// Page 2 fields
		successDefinition: "",
		successMetrics: "",
		milestones: "",
		teamDetails: "",
		organizationInfo: "",
		polkadotRelation: "",
		teamTravel: "",
		documentationPlan: "",
		otherFunding: "",
		additionalInfo: "",
	});

	const handleInputChange = (field: string, value: string) => {
		setFormData((prev) => ({ ...prev, [field]: value }));
	};

	const nextPage = () => {
		if (currentPage < 2) {
			setCurrentPage(currentPage + 1);
		}
	};

	const prevPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	const handleSubmit = () => {
		console.log("Form submitted:", formData);
		// Handle form submission here
	};

	return (
		<div className="flex h-full w-full flex-col gap-11 rounded-[10px] border border-[#C5C5C5] px-12 py-10 shadow">
			{/* Header */}

			<h1 className="text-center mb-8">Extraordinary Events Template</h1>

			<div className="space-y-6">
				{currentPage === 1 && (
					<>
						<div className="space-y-2">
							<Label>
								Describe your proposal and provide as much context as possible (500 words max)
							</Label>
							<Textarea
								value={formData.proposal}
								onChange={(e) => handleInputChange("proposal", e.target.value)}
								className="min-h-[100px]"
								maxLength={500}
							/>
						</div>

						<div className="space-y-2">
							<Label>
								If you are doing a site event or a fundraiser please describe the format,
								challenges, timeline, audience, agenda etc.
							</Label>
							<Textarea
								value={formData.eventType}
								onChange={(e) => handleInputChange("eventType", e.target.value)}
								className="min-h-[80px]"
							/>
						</div>

						<div className="space-y-2">
							<Label>
								If you are requesting a sponsorship, please clarify why you decided on that
								tier, specify/please attach the pitch deck at the top of the proposal in the
								relevant section
							</Label>
							<Textarea
								value={formData.sponsorshipDetails}
								onChange={(e) => handleInputChange("sponsorshipDetails", e.target.value)}
								className="min-h-[80px]"
							/>
						</div>

						<div className="space-y-2">
							<Label>What projects from the ecosystem are you collaborating with?</Label>
							<Textarea
								value={formData.collaboratingProjects}
								onChange={(e) => handleInputChange("collaboratingProjects", e.target.value)}
								className="min-h-[60px]"
							/>
						</div>

						<div className="space-y-2">
							<Label>
								Why are you doing this kind of event and why are you the best team to execute
								it?
							</Label>
							<Textarea
								value={formData.eventPurpose}
								onChange={(e) => handleInputChange("eventPurpose", e.target.value)}
								className="min-h-[80px]"
							/>
						</div>

						<div className="space-y-2">
							<Label>
								How can the event benefit Polkadot? How does the technology projects and
								community fit in?
							</Label>
							<Textarea
								value={formData.polkadotBenefit}
								onChange={(e) => handleInputChange("polkadotBenefit", e.target.value)}
								className="min-h-[80px]"
							/>
						</div>

						<div className="space-y-2">
							<Label>Will you have any Designs and/or merch?</Label>
							<Textarea
								value={formData.designsMerch}
								onChange={(e) => handleInputChange("designsMerch", e.target.value)}
								className="min-h-[60px]"
							/>
						</div>

						<div className="space-y-2">
							<Label>
								Do you have your designs prepared or will you be sourcing assets from
								Gavin/team? We recommend adding a designer to the budget and making a special
								designation for local merch by modifying the existing graphics or sticking to
								brand guidelines.
							</Label>
							<Textarea
								value={formData.designProposal}
								onChange={(e) => handleInputChange("designProposal", e.target.value)}
								className="min-h-[80px]"
							/>
						</div>

						<div className="space-y-2">
							<Label>
								If you are applying for a sponsorship which includes a booth please provide a
								mockboard or let us know the concept
							</Label>
							<Textarea
								value={formData.sponsorshipVenue}
								onChange={(e) => handleInputChange("sponsorshipVenue", e.target.value)}
								className="min-h-[60px]"
							/>
						</div>

						<div className="space-y-2">
							<Label>How did you follow up after the event?</Label>
							<Textarea
								value={formData.followUp}
								onChange={(e) => handleInputChange("followUp", e.target.value)}
								className="min-h-[60px]"
							/>
						</div>

						<div className="space-y-2">
							<Label>
								What kind of audience does your event aim to attract? How will you engage your
								audience?
							</Label>
							<Textarea
								value={formData.targetAudience}
								onChange={(e) => handleInputChange("targetAudience", e.target.value)}
								className="min-h-[80px]"
							/>
						</div>

						<div className="space-y-2">
							<Label>Ex. activators, forms, POAPs, NFTs, Merch...</Label>
							<Textarea
								value={formData.attendeeDetails}
								onChange={(e) => handleInputChange("attendeeDetails", e.target.value)}
								className="min-h-[60px]"
							/>
						</div>

						<div className="space-y-2">
							<Label>How will you reach out to them post the event?</Label>
							<Textarea
								value={formData.postEventReach}
								onChange={(e) => handleInputChange("postEventReach", e.target.value)}
								className="min-h-[60px]"
							/>
						</div>

						<div className="space-y-2">
							<Label>What is your marketing strategy?</Label>
							<Textarea
								value={formData.marketingStrategy}
								onChange={(e) => handleInputChange("marketingStrategy", e.target.value)}
								className="min-h-[60px]"
							/>
						</div>

						<div className="space-y-2">
							<Label>
								How do you plan to document the event (photos/videos/post production)? How much
								content do you aim to produce?
							</Label>
							<Textarea
								value={formData.documentation}
								onChange={(e) => handleInputChange("documentation", e.target.value)}
								className="min-h-[80px]"
							/>
						</div>
					</>
				)}

				{currentPage === 2 && (
					<>
						<div className="space-y-2">
							<Label>How do we define success?</Label>
							<Textarea
								value={formData.successDefinition}
								onChange={(e) => handleInputChange("successDefinition", e.target.value)}
								className="min-h-[60px]"
							/>
						</div>

						<div className="space-y-2">
							<Label>
								Define your success metrics and the numbers you aim to reach/attendees, leads,
								survey grade from attendees, attendees...
							</Label>
							<Textarea
								value={formData.successMetrics}
								onChange={(e) => handleInputChange("successMetrics", e.target.value)}
								className="min-h-[80px]"
							/>
						</div>

						<div className="space-y-2">
							<Label>Milestones and deliverables?</Label>
							<Textarea
								value={formData.milestones}
								onChange={(e) => handleInputChange("milestones", e.target.value)}
								className="min-h-[60px]"
							/>
						</div>

						<div className="space-y-2">
							<Label className="font-semibold">Team</Label>
							<Label className="text-sm text-gray-600">
								Please describe every team member in detail with relevant information about
								their roles and how they will contribute to the event, the required "must-have"
								expertise, experience, skills necessary for the team
							</Label>
							<Textarea
								value={formData.teamDetails}
								onChange={(e) => handleInputChange("teamDetails", e.target.value)}
								className="min-h-[100px]"
							/>
						</div>

						<div className="space-y-2">
							<Label>
								If you are an organization please provide information about previous works and
								links to social media and website/portfolio.
							</Label>
							<Textarea
								value={formData.organizationInfo}
								onChange={(e) => handleInputChange("organizationInfo", e.target.value)}
								className="min-h-[80px]"
							/>
						</div>

						<div className="space-y-2">
							<Label>
								Explain your relation to Polkadot, what is your position in the ecosystem, what
								groups do you align with, and what chain you participate in
							</Label>
							<Textarea
								value={formData.polkadotRelation}
								onChange={(e) => handleInputChange("polkadotRelation", e.target.value)}
								className="min-h-[80px]"
							/>
						</div>

						<div className="space-y-2">
							<Label className="font-semibold">Team Travel</Label>
							<Textarea
								value={formData.teamTravel}
								onChange={(e) => handleInputChange("teamTravel", e.target.value)}
								className="min-h-[60px]"
							/>
						</div>

						<div className="space-y-2">
							<Label>
								How do you plan to document the event (photos/videos/post production)? How much
								content do you aim to produce?
							</Label>
							<Textarea
								value={formData.documentationPlan}
								onChange={(e) => handleInputChange("documentationPlan", e.target.value)}
								className="min-h-[80px]"
							/>
						</div>

						<div className="space-y-2">
							<Label>
								Have you received any other funding in the ecosystem for this application? If
								so, from which grants/fund programs and how much? Please list the addresses or
								information
							</Label>
							<Textarea
								value={formData.otherFunding}
								onChange={(e) => handleInputChange("otherFunding", e.target.value)}
								className="min-h-[80px]"
							/>
						</div>

						<div className="space-y-2">
							<Label>Additional Information</Label>
							<Textarea
								value={formData.additionalInfo}
								onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
								className="min-h-[120px]"
							/>
						</div>
					</>
				)}

				{/* Navigation */}
				<div className="flex justify-between items-center pt-6 border-t">
					<div className="flex items-center gap-2">
						<span className="text-sm text-gray-500">Page {currentPage} of 2</span>
					</div>

					<div className="flex gap-2">
						{currentPage > 1 && (
							<Button variant="outline" onClick={prevPage}>
								<ChevronLeft className="w-4 h-4 mr-1" />
								Previous
							</Button>
						)}

						{currentPage < 2 ? (
							<Button onClick={nextPage}>
								Next
								<ChevronRight className="w-4 h-4 ml-1" />
							</Button>
						) : (
							<Button onClick={handleSubmit} className="bg-black text-white hover:bg-gray-800">
								Continue
							</Button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
